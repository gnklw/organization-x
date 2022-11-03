package com.organizationx.employee;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.organizationx.util.Constant.SIZE;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepo employeeRepo;
    private final ModelMapper mapper;

    public EmployeeServiceImpl(EmployeeRepo employeeRepo, ModelMapper mapper) {
        this.employeeRepo = employeeRepo;
        this.mapper = mapper;
    }

    @Override
    public EmployeeDTO create(CreateEmployeeDTO createEmployeeDTO) {
        this.employeeRepo
                .findByCivilIDNumber(createEmployeeDTO.getCivilIDNumber())
                .ifPresent(employee -> {
                    throw new IllegalArgumentException(
                            "The employee with the civil id number {" + createEmployeeDTO.getCivilIDNumber() + "} already exists."
                    );
                });

        return this.mapper.map(
                this.employeeRepo.save(this.mapper.map(createEmployeeDTO, Employee.class)),
                EmployeeDTO.class
        );
    }

    @Override
    public EmployeeDTO update(Long id, CreateEmployeeDTO createEmployeeDTO) {
        return this.mapper.map(
                this.employeeRepo.save(
                        this.employeeRepo
                                .findById(id)
                                .orElseThrow(() -> new NullPointerException("Employee with id {" + id + "} was not found."))
                                .setFirstName(createEmployeeDTO.getFirstName())
                                .setLastName(createEmployeeDTO.getLastName())
                                .setAge(createEmployeeDTO.getAge())
                                .setPosition(createEmployeeDTO.getPosition())
                ),
                EmployeeDTO.class
        );
    }

    @Override
    public void delete(Long id) {
        this.employeeRepo.delete(
                this.employeeRepo
                        .findById(id)
                        .orElseThrow(() -> new NullPointerException("Employee with id {" + id + "} was not found."))
        );
    }

    @Override
    public List<EmployeeDTO> search(String keyword, int page) {
        if (keyword == null) {
            return toEmployeeDTOs(this.employeeRepo.findAllEmployees(PageRequest.of(page, SIZE)));
        }

        return toEmployeeDTOs(this.employeeRepo.findAllByKeyword(keyword, PageRequest.of(page, SIZE)));
    }

    private List<EmployeeDTO> toEmployeeDTOs(Page<Employee> page) {
        return page
                .stream()
                .map(e -> this.mapper.map(e, EmployeeDTO.class))
                .toList();
    }
}
