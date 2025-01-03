<script setup>
import { ref, onMounted } from 'vue';

const currentLevel = ref('foundation');
const courses = [
    {id: 1, name: 'Course 1'},
    {id: 1, name: 'Course 2'},
    {id: 1, name: 'Course 3'},
    {id: 1, name: 'Course 4'},
    {id: 1, name: 'Course 5'},
    {id: 1, name: 'Course 6'},
    {id: 1, name: 'Course 7'},
    {id: 1, name: 'Course 8'},
]
</script>

<template>
    <article class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <h1 class="fw-bold">Create New Term Track</h1>
        <div id="new-term-carousel" class="carousel flex-grow-1 slide h-100 w-100" data-bs-wrap="false">
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">
                    <div class="new-term-form m-auto h-100 d-flex flex-column justify-content-center align-items-center">
                        <h2>Select Current Level</h2>
                        <select v-model="currentLevel" class="form-select fs-5 text-center" aria-label="Default select example">
                            <option value="foundation" selected>Foundation</option>
                            <option value="diploma">Diploma</option>
                        </select>
                    </div>
                </div>
                <div class="carousel-item h-100">
                    <div class="new-term-form m-auto h-100 d-flex flex-column justify-content-center overflow-auto align-items-center">
                        <h2>Select Term Courses</h2>
                        <div>
                            <div v-for="course in courses" :key="course.id" class="form-check vertical-align-middle">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                   {{course.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item h-100">
                    <div class="new-term-form m-auto h-100 d-flex flex-column justify-content-center align-items-center">
                        <h2>Enter Target Grade</h2>
                        <input type="text" class="form-control fs-5 text-center" placeholder="Enter Target Grade">
                        <button type="button" class="mt-3 btn bg-white text-black">Create Term Track</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#new-term-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#new-term-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </article>
</template>