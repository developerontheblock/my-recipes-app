package com.example.repository;

import java.util.Optional;

import com.example.model.RoleTypes;
import com.example.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(RoleTypes name);
}
