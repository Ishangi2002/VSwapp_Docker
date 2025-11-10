package com.webproject.vswapp_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User_DetailsDto {
    private Long id;
    private Long userId;
    private String firstname;
    private String lastname;
    private String profilePicture;
    private String email;

}
