package com.example.minidemo.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.minidemo.models.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {

}
