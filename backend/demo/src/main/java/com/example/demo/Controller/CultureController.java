package com.example.demo.Controller;

import com.example.demo.Data.Cultures;
import com.example.demo.Repository.CulturesRepository;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/cultures/{culture_id}")
public class CultureController {
    private final CulturesRepository culturesRepository;

    public CultureController(CulturesRepository culturesRepository) {
        this.culturesRepository = culturesRepository;
    }

    @GetMapping
    public Cultures getFactsByCultures(@PathVariable int culture_id) {
        return culturesRepository.findByCultureId(culture_id);
    }
}
