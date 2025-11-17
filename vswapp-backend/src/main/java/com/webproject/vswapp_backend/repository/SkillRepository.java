package com.webproject.vswapp_backend.repository;

import com.webproject.vswapp_backend.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SkillRepository extends JpaRepository <Skill,Long> {
    void deleteByUserId(Long userId);
    List<Skill> findByUserId(Long userId);

}
