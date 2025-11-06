package com.example.demo.Controller;

import com.example.demo.Data.Cultures;
import com.example.demo.Repository.CulturesRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cultures/{cultureId}")
public class CultureController {
    private final CulturesRepository culturesRepository;

    public CultureController(CulturesRepository culturesRepository) {
        this.culturesRepository = culturesRepository;
    }

    @GetMapping
    public List<Cultures> getAllCultures() {
        return culturesRepository.findAll();
    }
}
// http://localhost:8080/cultures/
