package com.organizationx.department;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.organizationx.util.Constant.SIZE;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepo departmentRepo;
    private final ModelMapper mapper;

    public DepartmentServiceImpl(DepartmentRepo departmentRepo, ModelMapper mapper) {
        this.departmentRepo = departmentRepo;
        this.mapper = mapper;
    }

    @Override
    public DepartmentDTO create(CreateDepartmentDTO createDepartmentDTO) {
        this.departmentRepo
                .findByDepartmentName(createDepartmentDTO.getDepartmentName())
                .ifPresent((d) -> {
                    throw new IllegalArgumentException(
                            "The employee with name {" + d.getDepartmentName() + "} already exists."
                    );
                });

        return this.mapper.map(
                this.departmentRepo.save(this.mapper.map(createDepartmentDTO, Department.class)),
                DepartmentDTO.class
        );
    }

    @Override
    public DepartmentDTO update(Long id, CreateDepartmentDTO createDepartmentDTO) {
        return this.mapper.map(
                this.departmentRepo.save(
                        this.departmentRepo
                                .findById(id)
                                .orElseThrow(() -> new NullPointerException("Department with id {" + id + "} was not found."))
                                .setDepartmentName(createDepartmentDTO.getDepartmentName())
                                .setDescription(createDepartmentDTO.getDescription())
                ),
                DepartmentDTO.class
        );
    }

    @Override
    public void delete(Long id) {
        this.departmentRepo.delete(
                this.departmentRepo
                        .findById(id)
                        .orElseThrow(() -> new NullPointerException("Department with id {" + id + "} was not found."))
                        .setEmployees(null)
                        .setManagement(null));
    }

    @Override
    public List<DepartmentDTO> search(String keyword, int page) {
        if (keyword == null) {
            return toDepartmentDTOs(this.departmentRepo.findAll(PageRequest.of(page, SIZE)));
        }

        return toDepartmentDTOs(this.departmentRepo.findAllByKeyword(keyword, PageRequest.of(page, SIZE)));
    }

    private List<DepartmentDTO> toDepartmentDTOs(Page<Department> page) {
        return page
                .stream()
                .map(d -> this.mapper.map(d, DepartmentDTO.class))
                .toList();
    }
}
