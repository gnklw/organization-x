package com.organizationx.management;

import com.organizationx.department.DepartmentDTO;
import com.organizationx.employee.EmployeeDTO;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.organizationx.util.Constant.SIZE;

@Service
public class ManagementServiceImpl implements ManagementService {

    private final ManagementRepo managementRepo;
    private final ModelMapper mapper;

    public ManagementServiceImpl(ManagementRepo managementRepo, ModelMapper mapper) {
        this.managementRepo = managementRepo;
        this.mapper = mapper;
    }

    @Override
    public ManagementDTO create(CreateManagementDTO createManagementDTO) {
        this.managementRepo
                .findByManagementName(createManagementDTO.getManagementName())
                .ifPresent(m -> {
                    throw new IllegalArgumentException(
                            "The employee with name {" + createManagementDTO.getManagementName() + "} already exists."
                    );
                });

        return this.mapper.map(
                this.managementRepo.save(this.mapper.map(createManagementDTO, Management.class)),
                ManagementDTO.class
        );
    }

    @Override
    public ManagementDTO update(Long id, CreateManagementDTO createManagementDTO) {    	
        return this.mapper.map(
                this.managementRepo.save(
                        this.managementRepo
                                .findById(id)
                                .orElseThrow(() -> new NullPointerException("Management with id {" + id + "} was not found."))
                                .setManagementName(createManagementDTO.getManagementName())
                                .setDescription(createManagementDTO.getDescription())
                ),
                ManagementDTO.class
        );
    }

    @Override
    public void delete(Long id) {
        this.managementRepo.delete(
                this.managementRepo
                        .findById(id)
                        .orElseThrow(() -> new NullPointerException("Management with id {" + id + "} was not found."))
                        .setDepartments(null)
                        .setDirector(null)
        );
    }

    @Override
    public List<ManagementDTO> search(String keyword, int page) {
        if (keyword == null) {
            return toManagementDTOs(this.managementRepo.findAllManagements(PageRequest.of(page, SIZE)));
        }

        return toManagementDTOs(this.managementRepo.findAllByKeyword(keyword, PageRequest.of(page, SIZE)));
    }

    private List<ManagementDTO> toManagementDTOs(Page<Management> page) {
        return page
                .stream()
                .map(m -> this.mapper.map(m, ManagementDTO.class)
                        .setDirector(this.mapper.map(m.getDirector(), EmployeeDTO.class))
                        .setDepartments(
                                m.getDepartments()
                                        .stream()
                                        .map(d -> this.mapper.map(d, DepartmentDTO.class)
                                                .setEmployees(
                                                        d.getEmployees()
                                                                .stream()
                                                                .map(e -> this.mapper.map(e, EmployeeDTO.class))
                                                                .toList()))
                                        .toList()

                        )
                )
                .toList();
    }
}
