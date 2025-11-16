package com.webproject.vswapp_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;
import java.util.HashSet;

@Entity
@Table(name = "skill")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "skill_id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "level")
    private String level;

    @Column(name = "about")
    private String about;

    @Column(name = "image")
    private String imagePath;


    // Many skills belong to one category
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    // Many-to-one with User
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

}
