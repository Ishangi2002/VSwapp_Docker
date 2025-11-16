package com.webproject.vswapp_backend.service.impl;

import com.webproject.vswapp_backend.dto.UserDto;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.exception.ResourceNotFoundException;
import com.webproject.vswapp_backend.mapper.UserMapper;
import com.webproject.vswapp_backend.service.UserService;
import com.webproject.vswapp_backend.repository.UserRepository;
import com.webproject.vswapp_backend.repository.User_DetailsRepository;
import com.webproject.vswapp_backend.entity.User_Details;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private final User_DetailsRepository userDetailsRepository;

    @Transactional
    @Override

    public UserDto createUser(UserDto userDto) {
        // Save User
        User user = UserMapper.maptoUser(userDto);
        User savedUser = userRepository.save(user);

        // Create User_Details
        User_Details userDetails = new User_Details();
        userDetails.setUser(savedUser);
        userDetails.setFirstname(userDto.getFirstname());
        userDetails.setLastname(userDto.getLastname());
        userDetails.setProfilePicture(userDto.getProfilePicture());

        userDetailsRepository.save(userDetails);

        // Map both User + User_Details to DTO
        return UserMapper.maptoUserDto(savedUser, userDetails);
    }


    @Override
    public UserDto getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()->
                        new ResourceNotFoundException("User is not exist in given id: "+userId));
        User_Details details = userDetailsRepository.findByUser(user);
        return UserMapper.maptoUserDto(user,details);
    }

    @Override
    public List<UserDto> getAllUser() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(user -> {
                    User_Details details = userDetailsRepository.findByUser(user);
                    return UserMapper.maptoUserDto(user, details);
                })
                .collect(Collectors.toList());
    }


    @Override
    public UserDto updateUser(Long userId, UserDto updatedUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + userId));

        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setCreatedAt(updatedUser.getCreatedAt());

        User updatedUserObj = userRepository.save(user);

        // Update User_Details too
        User_Details details = userDetailsRepository.findByUser(user);
        if (details != null) {
            details.setFirstname(updatedUser.getFirstname());
            details.setLastname(updatedUser.getLastname());
            details.setProfilePicture(updatedUser.getProfilePicture());
            userDetailsRepository.save(details);
        }

        return UserMapper.maptoUserDto(updatedUserObj, details);
    }


    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User is not exist in given id:"+userId));

        userRepository.deleteById(userId);


    }

    @Override
    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
        User_Details details = userDetailsRepository.findByUser(user);
        return UserMapper.maptoUserDto(user, details);
    }

    @Override
    public User getUserEntityById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
    }

}
