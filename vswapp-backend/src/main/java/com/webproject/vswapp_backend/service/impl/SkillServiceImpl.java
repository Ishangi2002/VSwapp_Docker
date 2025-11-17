package com.webproject.vswapp_backend.service.impl;

import com.webproject.vswapp_backend.dto.SkillDto;
import com.webproject.vswapp_backend.entity.Skill;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.entity.Category;
import com.webproject.vswapp_backend.exception.ResourceNotFoundException;
import com.webproject.vswapp_backend.mapper.SkillMapper;
import com.webproject.vswapp_backend.repository.SkillRepository;
import com.webproject.vswapp_backend.repository.UserRepository;
import com.webproject.vswapp_backend.repository.CategoryRepository;
import com.webproject.vswapp_backend.service.SkillService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@AllArgsConstructor

public class SkillServiceImpl implements SkillService {

    private SkillRepository skillRepository;
    private UserRepository userRepository;
    private CategoryRepository categoryRepository;

    @Override
    public SkillDto createSkill(SkillDto skillDto, Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        Category category = categoryRepository.findByCategoryName(skillDto.getCategory())
                .orElseGet(() -> {
                    Category newCategory = new Category();
                    newCategory.setCategoryName(skillDto.getCategory());
                    return categoryRepository.save(newCategory);
                });

        Skill skill = SkillMapper.mapToSkill(skillDto);
        skill.setUser(user);
        skill.setCategory(category);

        Skill savedSkill =  skillRepository.save(skill);

        return SkillMapper.mapToSkillDto(savedSkill);
    }

    @Override
    public SkillDto getSkillById(Long skillId) {
        Skill skill = skillRepository.findById(skillId)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Skill is not exist with given id: "+ skillId));


        return SkillMapper.mapToSkillDto(skill);
    }

    @Override
    public void saveSkillImage(Long skillId, MultipartFile imageFile) throws IOException {
        Skill skill = skillRepository.findById(skillId)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found with id " + skillId));

        // Save image to a folder
        String folder = "uploads/skills/";
        Path uploadPath = Paths.get(folder);

        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Use skillId + original file name
        String fileName = skillId + "_" + imageFile.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);

        // If file already exists, replace it
        Files.copy(imageFile.getInputStream(), filePath, java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        // Save path in database
        skill.setImagePath(fileName);
        skillRepository.save(skill);
    }


    @Override
    public List<SkillDto> getAllSkills() {
       List<Skill> skills= skillRepository.findAll();
        return skills.stream().map((skill) -> SkillMapper.mapToSkillDto(skill))
                .collect(Collectors.toList());

    }

    @Override
    public List<SkillDto> getSkillsByUserId(Long userId) {
        List<Skill> skills = skillRepository.findByUserId(userId);
        return skills.stream().map(SkillMapper::mapToSkillDto).collect(Collectors.toList());
    }




    @Override
    public SkillDto updateSkill(Long skillId, SkillDto updatedSkill) {
      Skill skill =  skillRepository.findById(skillId)
                .orElseThrow(() ->new ResourceNotFoundException("Skill is not exist with given id: "+ skillId));

      skill.setTitle(updatedSkill.getTitle());
      skill.setLevel(updatedSkill.getLevel());
      skill.setAbout(updatedSkill.getAbout());
      skill.setImagePath(updatedSkill.getImagePath());
        if (updatedSkill.getCategory() != null) {
            Category category = categoryRepository.findByCategoryName(updatedSkill.getCategory())
                    .orElseThrow(() -> new ResourceNotFoundException(
                            "Category not found with name: " + updatedSkill.getCategory()));
            skill.setCategory(category);
        }

      Skill updatedSkillObj =  skillRepository.save(skill);

        return SkillMapper.mapToSkillDto(updatedSkillObj);
    }

    @Override
    public void deleteSkiill(Long skillId) {
        Skill skill =  skillRepository.findById(skillId)
                .orElseThrow(() ->new ResourceNotFoundException("Skill is not exist with given id: "+ skillId));

        skillRepository.deleteById(skillId);

    }


}
