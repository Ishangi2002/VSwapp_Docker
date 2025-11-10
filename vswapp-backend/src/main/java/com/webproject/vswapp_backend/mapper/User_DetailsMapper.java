package com.webproject.vswapp_backend.mapper;

import com.webproject.vswapp_backend.dto.User_DetailsDto;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.entity.User_Details;

public class User_DetailsMapper {

    public static User_DetailsDto mapToUserDetailsDto(User_Details details) {
        return new User_DetailsDto(
                details.getId(),
                details.getUser() != null ? details.getUser().getId() : null,
                details.getFirstname(),
                details.getLastname(),
                details.getProfilePicture(),
                details.getUser() != null ? details.getUser().getEmail() : null
        );
    }

    public static User_Details mapToUserDetails(User_DetailsDto dto, User user) {
        return new User_Details(
                dto.getId(),
                user,
                dto.getFirstname(),
                dto.getLastname(),
                dto.getProfilePicture()
        );
    }
}
