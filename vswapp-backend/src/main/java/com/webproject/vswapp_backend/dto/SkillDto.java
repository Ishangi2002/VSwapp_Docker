package com.webproject.vswapp_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.Data;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data

public class SkillDto {
    private Long id;
    private String title;
    private String level;
    private String about;
    private String imagePath;
    private String category;
    private Long userId;

}
