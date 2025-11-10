package com.webproject.vswapp_backend.mapper;

import com.webproject.vswapp_backend.dto.UserDto;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.entity.User_Details;

public class UserMapper {

    // Map User + User_Details to UserDto
    public static UserDto maptoUserDto(User user, User_Details userDetails) {
        return new UserDto(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                user.getCreatedAt(),
                userDetails != null ? userDetails.getFirstname() : "",
                userDetails != null ? userDetails.getLastname() : "",
                userDetails != null ? userDetails.getProfilePicture() : null
        );
    }

    // Map UserDto to User entity
    public static User maptoUser(UserDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        return user;
    }
}

