package com.example.demo.Data;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Cultures")
@Data
public class Cultures {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "culture_id")
    private int cultureId;

    @Column(name="name")
    private String name;

    @Column(name="url")
    private String url;

    @Column(name="alt_text")
    private String altText;
}
