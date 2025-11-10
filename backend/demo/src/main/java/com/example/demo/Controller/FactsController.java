package com.example.demo.Controller;

import com.example.demo.Data.Facts;
import com.example.demo.Repository.FactsRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/facts")
public class FactsController {
    private final FactsRepository factsRepository;

    public FactsController(FactsRepository factsRepository) {
        this.factsRepository = factsRepository;
    }

    @GetMapping
    public List<Facts> getAllFacts() {
        return factsRepository.findAll();
    }

    @GetMapping("/{culture_id}")
    public Facts getFactsByCultures(@PathVariable int culture_id) {
        return factsRepository.findByCultureId(culture_id);
    }

}
