[READ MORE on DBML](http://www.dbml-lang.org/docs/#index-definition-new)

# SCHEMA REQUIREMENTS:
- [x] have a way to manage RECIPEs.
- [x] have a way to manage INGREDIENTs.
- [x] a RECIPE could have more than one INGREDIENT and the same INGREDIENT can be used in multiple RECIPEs.
  - Examples are "cup of corn flour" or "gram of butter".
- [x] when saving the INGREDIENTs for a RECIPE capture the QUANTITY required for that INGREDIENT as a floating number.
- [x] have a way to save step-by-step instructions for preparing a RECIPE.

---

```
Table authors {
  id int [pk]
  bio varchar
  favorite_recipe int [ref: - r.recipe_id]
  prefix varchar
  name varchar [not null]
  surname varchar
  suffix varchar [not null]
  birthday date
}

Table recipes as r {
  recipe_id int [pk]
  name varchar [not null]
  description varchar [not null]
  //author_id int [ref: > authors.id]
}

Table ingredients as i{
  ingredient_id int [pk]
  name varchar [not null]
  description varchar
}

Table measurements as m{
  measurement_id int [pk]
  unit_name varchar [not null]
}

Table quantities{
  quantity_id int [pk]
  quantity float [not null]
  measurement_id int [not null, ref: > m.measurement_id]
  ingredient_id int [not null, ref: > i.ingredient_id]
  recipe_id int [not null, ref: > r.recipe_id]
}

Table instructions{
  instruction_id int [pk, note: "composite key, see indexes"]
  step_number int [not null]
  description varchar [not null]
  recipe_id int [not null, ref: > r.recipe_id]
  
  indexes {
    instruction_id
    (recipe_id, step_number, description) [unique]
  }
}
```