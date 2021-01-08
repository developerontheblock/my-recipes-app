package com.example.repository;

import com.example.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RecipeRepository extends MongoRepository<Recipe, String> {
    List<Recipe> findByTitleContaining(String title);
    List<Recipe> findByPublished(boolean published);
}
