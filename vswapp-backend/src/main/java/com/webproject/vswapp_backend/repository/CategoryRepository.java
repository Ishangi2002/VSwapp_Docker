package com.webproject.vswapp_backend.repository;

import com.webproject.vswapp_backend.entity.Category;
import com.webproject.vswapp_backend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    Optional<Category> findByCategoryName(String name);
    }



