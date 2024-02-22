homeless_rate
--
calendar_year VARCHAR
county VARCHAR
total_experiencing_homelessness FLOAT
total_population FLOAT
experiencing_homelessness_percent FLOAT
--

population_density
--
county VARCHAR PK
population FLOAT
area_sq_mi FLOAT
density_sq_mi FLOAT
--

unemployment
--
county VARCHAR FK >- population_density.county
year VARCHAR
labor_force FLOAT
employment_count FLOAT
unemployment_count FLOAT
unemployment_rate FLOAT

crime_rate
--
county VARCHAR FK >- population_density.county
population FLOAT
violent_crime_rate_per_100k FLOAT
property_crime_rate_per_100k FLOAT


grouped_rates
--
county_group VARCHAR
average_density_sq_mi FLOAT
average_violent_crime_rate FLOAT
average_property_crime_rate FLOAT
average_unemployment_rate FLOAT
average_homelessness_rate FLOAT


unemployment_vs_density
--
county VARCHAR FK >- population_density.county
unemployment_rate FLOAT
density_sq_mi FLOAT

homelessness_vs_density
--
county VARCHAR FK >- population_density.county
density_sq_mi FLOAT
experiencing_homelessness_percent FLOAT

county_coordinates
--
geo_point VARCHAR
county VARCHAR FK >- population_density.county