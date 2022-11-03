package com.organizationx.service;

import java.util.List;

public interface BaseService<I, O> {

    O create(I i);

    O update(Long id, I i);

    void delete(Long id);

    List<O> search(String keyword, int page);
}
