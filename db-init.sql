USE `tool-tracking-demo`;

INSERT INTO user (id, username, password) VALUES ('e44ff611-5927-4289-9fc0-9c18c5e3c641', 'John', '$2b$10$ObxsFdbd.bRhZ4I3x/wSRu5tn3zEHkGGZinVi09aglZNnXeMSHg.K');
INSERT INTO core_user (id) VALUES ('e44ff611-5927-4289-9fc0-9c18c5e3c641');
INSERT INTO tool (id, name, description, location, checkOutDate, checkInDate, checkedOutById) VALUES ('164cf972-2094-11ee-be56-0242ac120002', 'Cordless Drill', 'DeWalt DCD791D2', 'Rack 1.b', NULL, NULL, NULL);
INSERT INTO tool (id, name, description, location, checkOutDate, checkInDate, checkedOutById) VALUES ('31feb4d0-2094-11ee-be56-0242ac120002', 'Orbital Sander', 'Bosch ROS20VSC', 'Rack 1.c', NULL, NULL, NULL);
INSERT INTO tool (id, name, description, location, checkOutDate, checkInDate, checkedOutById) VALUES ('1c36a746-2096-11ee-be56-0242ac120002', 'Jigsaw', 'Makita XVJ03Z', 'Rack 3', NULL, NULL, NULL);