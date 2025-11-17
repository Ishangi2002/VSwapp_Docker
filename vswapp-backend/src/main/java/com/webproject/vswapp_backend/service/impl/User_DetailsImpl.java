package com.webproject.vswapp_backend.service.impl;

import com.webproject.vswapp_backend.dto.User_DetailsDto;
import com.webproject.vswapp_backend.entity.User;
import com.webproject.vswapp_backend.entity.User_Details;
import com.webproject.vswapp_backend.exception.ResourceNotFoundException;
import com.webproject.vswapp_backend.mapper.User_DetailsMapper;
import com.webproject.vswapp_backend.repository.UserRepository;
import com.webproject.vswapp_backend.repository.User_DetailsRepository;
import com.webproject.vswapp_backend.service.User_DetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionSynchronizationManager;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class User_DetailsImpl implements User_DetailsService {

    private final User_DetailsRepository userDetailsRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public User_DetailsDto createUser_Details(User_DetailsDto userDetailsDto) {
        // Fetch the User entity by ID (assuming userDetailsDto has getUserId())
        User user = userRepository.findById(userDetailsDto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userDetailsDto.getUserId()));

        User_Details userDetails = User_DetailsMapper.mapToUserDetails(userDetailsDto, user);
        User_Details savedDetails = userDetailsRepository.save(userDetails);
        return User_DetailsMapper.mapToUserDetailsDto(savedDetails);
    }

    @Override
    public User_DetailsDto getUserDetailsByUserId(Long userId) {
        User_Details details = userDetailsRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("User details not found for userId: " + userId));
        return User_DetailsMapper.mapToUserDetailsDto(details);
    }


    @Override
    public List<User_DetailsDto> getAllUserDetails() {
        List<User_Details> allDetails = userDetailsRepository.findAll();
        return allDetails.stream()
                .map(User_DetailsMapper::mapToUserDetailsDto)
                .collect(Collectors.toList());
    }

    @Override
    public User_DetailsDto updateUserDetailsByUserId(Long userId, User_DetailsDto updatedDetailsDto) {
        // Fetch User_Details by userId
        User_Details existingDetails = userDetailsRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User details not found for userId: " + userId));

        // Update only the necessary fields
        existingDetails.setFirstname(updatedDetailsDto.getFirstname());
        existingDetails.setLastname(updatedDetailsDto.getLastname());
        existingDetails.setProfilePicture(updatedDetailsDto.getProfilePicture());

        // Save updated entity
        User_Details savedDetails = userDetailsRepository.save(existingDetails);

        return User_DetailsMapper.mapToUserDetailsDto(savedDetails);
    }


    @Override
    @Transactional
    public void deleteUserDetailsByUserId(Long userId) {
        User_Details existingDetails = userDetailsRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User details not found for userId: " + userId));
        userDetailsRepository.delete(existingDetails);
    }

}
