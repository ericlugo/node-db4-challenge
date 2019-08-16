# Generated Using [DBDiagrams](https://dbdiagram.io/)

```SQL
CREATE TABLE `authors`
(
  `id` int PRIMARY KEY,
  `bio` varchar(255),
  `favorite_recipe` int,
  `prefix` varchar(255),
  `name` varchar(255) NOT NULL,
  `surname` varchar(255),
  `suffix` varchar(255) NOT NULL,
  `birthday` date
);

CREATE TABLE `recipes`
(
  `recipe_id` int PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
);

CREATE TABLE `ingredients`
(
  `ingredient_id` int PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255)
);

CREATE TABLE `measurements`
(
  `measurement_id` int PRIMARY KEY,
  `unit_name` varchar(255) NOT NULL
);

CREATE TABLE `quantities`
(
  `quantity_id` int PRIMARY KEY,
  `quantity` float NOT NULL,
  `measurement_id` int NOT NULL,
  `ingredient_id` int NOT NULL,
  `recipe_id` int NOT NULL
);

CREATE TABLE `instructions`
(
  `instruction_id` int PRIMARY KEY COMMENT 'composite key, see indexes',
  `step_number` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `recipe_id` int NOT NULL
);

ALTER TABLE `authors` ADD FOREIGN KEY (`favorite_recipe`) REFERENCES `recipes` (`recipe_id`);

ALTER TABLE `quantities` ADD FOREIGN KEY (`measurement_id`) REFERENCES `measurements` (`measurement_id`);

ALTER TABLE `quantities` ADD FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`ingredient_id`);

ALTER TABLE `quantities` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`);

ALTER TABLE `instructions` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`recipe_id`);


CREATE  INDEX `instructions_index_0` 
ON `instructions` (`instruction_id`);

CREATE UNIQUE INDEX `instructions_index_1` 
ON `instructions` (`recipe_id`,`step_number`,`description`);
```