package com.webproject.vswapp_backend.controller;

import com.webproject.vswapp_backend.dto.SkillDto;
import com.webproject.vswapp_backend.service.SkillService;
import com.webproject.vswapp_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/skill")
@CrossOrigin(origins = "http://localhost:5173")

public class SkillController {
    private SkillService skillService;
    private UserService userService;

    //Build Add Skill REST API
    @PostMapping
    public ResponseEntity<SkillDto> createSkill(@RequestBody SkillDto skillDto) {
        SkillDto savedSkill = skillService.createSkill(skillDto, skillDto.getUserId());
        return new ResponseEntity<>(savedSkill, HttpStatus.CREATED);
    }

    //Build Upload image REST API

    @PostMapping("/{skillId}/image")
    public ResponseEntity<String> uploadSkillImage(
            @PathVariable Long skillId,
            @RequestParam("image") MultipartFile imageFile) {

        try {
            skillService.saveSkillImage(skillId, imageFile);
            return ResponseEntity.ok("Image uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error uploading image: " + e.getMessage());
        }
    }


    //Build get Skill REST API
    @GetMapping("{id}")
    public ResponseEntity<SkillDto> getSkillById(@PathVariable("id") Long skillId){
        SkillDto skillDto = skillService.getSkillById(skillId);
        return ResponseEntity.ok(skillDto);
    }

    //Build get All Skill REST API
    @GetMapping
    public ResponseEntity<List<SkillDto>> getAllSkills(){
        List<SkillDto> skills = skillService.getAllSkills();
        return ResponseEntity.ok(skills);
    }

    // Get all skills for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SkillDto>> getSkillsByUserId(@PathVariable Long userId) {
        List<SkillDto> skills = skillService.getSkillsByUserId(userId);
        return ResponseEntity.ok(skills);
    }


    //Build update Skill REST API
    @PutMapping("{id}")
    public ResponseEntity<SkillDto> updateSkill(@PathVariable("id") Long skillId,
                                                @RequestBody SkillDto updatedSkill){
      SkillDto skillDto =  skillService.updateSkill(skillId,updatedSkill);
      return ResponseEntity.ok(skillDto);
    }

    //Build update Skill Image REST API
    @PutMapping("/{skillId}/image")
    public ResponseEntity<String> updateSkillImage(
            @PathVariable Long skillId,
            @RequestParam("image") MultipartFile imageFile) {

        try {
            skillService.saveSkillImage(skillId, imageFile);
            return ResponseEntity.ok("Image updated successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating image: " + e.getMessage());
        }
    }


    //Build delete Skill REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSkill(@PathVariable("id") Long skillId){
        skillService.deleteSkiill(skillId);
        return ResponseEntity.ok("Skill deleted successfully!");

    }
}
