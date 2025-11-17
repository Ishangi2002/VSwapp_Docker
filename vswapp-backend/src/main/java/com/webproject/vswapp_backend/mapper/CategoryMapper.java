package com.webproject.vswapp_backend.mapper;

import com.webproject.vswapp_backend.dto.CategoryDto;
import com.webproject.vswapp_backend.entity.Category;

public class CategoryMapper {

    // Entity → DTO
    public static CategoryDto mapToCategoryDto(Category category) {
        if (category == null) {
            return null;
        }
        return new CategoryDto(
                category.getId(),
                category.getCategoryName()
        );
    }

    // DTO → Entity
    public static Category mapToCategory(CategoryDto dto) {
        if (dto == null) {
            return null;
        }
        Category category = new Category(); // uses no-args constructor
        category.setId(dto.getId());
        category.setCategoryName(dto.getCategoryName());
        return category;
    }
}
