### SAMPLE SQL QUERIES:

```SQL
-- RETURN [ingredientName, quantity, unitOfMeasure] for all recipes sorted by ingredientName
SELECT i.name, q.quantity, m.unit_name
FROM quantities AS q
JOIN recipes AS r ON q.recipe_id = r.recipe_id
JOIN measurements AS m ON q.measurement_id = m.measurement_id
JOIN ingredients AS i ON q.ingredient_id = i.ingredient_id
GROUP BY r.name
ORDER BY i.name

-- RETURN [stepNumber, description] for all recipes sorted by stepNumber
SELECT i.step_number, i.description
FROM instructions AS i
JOIN recipes AS r ON i.recipe_id = r.recipe_id
GROUP BY i.recipe_id
ORDER BY i.step_number
```