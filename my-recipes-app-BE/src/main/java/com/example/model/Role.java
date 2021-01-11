package com.example.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "roles")
public class Role {
  @Id
  private String id;

  private RoleTypes name;

  public Role() {

  }

  public Role(RoleTypes name) {
    this.name = name;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public RoleTypes getName() {
    return name;
  }

  public void setName(RoleTypes name) {
    this.name = name;
  }
}
