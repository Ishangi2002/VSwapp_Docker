package com.webproject.vswapp_backend.service;

import com.webproject.vswapp_backend.dto.FeedbackDto;

import java.util.List;

public interface FeedbackService {
    FeedbackDto createFeedback(FeedbackDto feedbackDto);
    FeedbackDto getFeedbackById(Long feedbackId);
    List<FeedbackDto> getAllFeedback();
    FeedbackDto updateFeedback(Long feedbackId, FeedbackDto updatedFeedback);
    void deleteFeedback(Long feedbackId);
}
