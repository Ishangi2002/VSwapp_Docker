package com.webproject.vswapp_backend.repository;

import com.webproject.vswapp_backend.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
}
