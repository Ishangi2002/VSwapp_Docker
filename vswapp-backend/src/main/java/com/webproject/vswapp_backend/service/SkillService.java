package com.webproject.vswapp_backend.service;

import com.webproject.vswapp_backend.dto.SkillDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.io.IOException;

public interface SkillService {
     SkillDto createSkill(SkillDto skillDto, Long userId);
     SkillDto getSkillById(Long skillId);
     List<SkillDto> getAllSkills();
     SkillDto updateSkill(Long skillId,SkillDto updatedSkill);
     void deleteSkiill(Long skillId);
     void saveSkillImage(Long skillId, MultipartFile imageFile) throws IOException;
     List<SkillDto> getSkillsByUserId(Long userId);

}
