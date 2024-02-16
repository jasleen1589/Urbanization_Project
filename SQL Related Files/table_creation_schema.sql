--population table
CREATE TABLE population_density(
	county VARCHAR NOT NULL PRIMARY KEY,
	population FLOAT,
	area_sq_mi FLOAT,
	density_sq_mi FLOAT NOT NULL
);

--homeless rate

CREATE TABLE homeless_rate(
	calendar_year VARCHAR,
	county VARCHAR NOT NULL,
	total_experiencing_homelessness FLOAT,
	total_population FLOAT,
	experiencing_homelessness_percent FLOAT NOT NULL
);


-- unemployment rates
CREATE TABLE unemployment(
	county VARCHAR NOT NULL,
	year VARCHAR,
	labor_force FLOAT,
	employment_count FLOAT,
	unemployment_count FLOAT,
	unemployment_rate FLOAT NOT NULL,
	FOREIGN KEY(county) REFERENCES population_density(county)
);


-- unemployment vs density
CREATE TABLE unemployment_vs_density(
	county VARCHAR,
	unemployment_rate FLOAT,
	density_sq_mi FLOAT,
	FOREIGN KEY(county) REFERENCES population_density(county)
);


--homelessness vs density
CREATE TABLE homelessness_vs_density(
	county VARCHAR NOT NULL,
	density_sq_mi FLOAT,
	experiencing_homelessness_percent FLOAT,
	FOREIGN KEY(county) REFERENCES population_density(county)
);


--crime rate table
CREATE TABLE crime_rate(
	county VARCHAR NOT NULL,
	population FLOAT,
	violent_crime_rate_per_100k FLOAT,
	property_crime_rate_per_100k FLOAT,
	FOREIGN KEY(county) REFERENCES population_density(county)
);


--county coordinates
CREATE TABLE county_coordinates(
	geo_point VARCHAR,
	county VARCHAR NOT NULL,
	FOREIGN KEY(county) REFERENCES population_density(county)
);

SELECT * FROM county_coordinates
--grouped rates

CREATE TABLE grouped_rates(
	county_group VARCHAR,
	average_density_sq_mi FLOAT,
	average_violent_crime_rate FLOAT,
	average_property_crime_rate FLOAT,
	average_unemployment_rate FLOAT,
	average_homelessness_rate FLOAT
);

SELECT * FROM population_density
SELECT * FROM homeless_rate
SELECT * FROM unemployment
SELECT * FROM unemployment_vs_density
SELECT * FROM homelessness_vs_density
SELECT * FROM crime_rate
SELECT * FROM county_coordinates
SELECT * FROM grouped_rates
