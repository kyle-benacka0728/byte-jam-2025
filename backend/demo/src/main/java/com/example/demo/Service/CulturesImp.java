package com.example.demo.Service;

import com.example.demo.Repository.CulturesRepository;
import com.example.demo.Repository.FactsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Data.Cultures;

@Service
public class CulturesImp implements CulturesService {
    @Autowired
    private CulturesRepository culturesRepository;

    @Autowired
    private FactsRepository factsRepository;

    @Override
    public Cultures addCulture(Cultures c) {
        return culturesRepository.save(c);
    }
}
