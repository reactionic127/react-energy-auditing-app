
exports.up = function(knex, Promise) {
  return knex.schema
    .createTableIfNotExists('v5_totals', (t) => {
      t.integer(`job_id`).primary().notNullable().unsigned().references('jobs.id').onDelete('cascade')
      t.decimal(`total_savings`, 10, 0)
      t.decimal(`installed_costs`, 10, 0)
      t.decimal(`sir`, 10, 1)
      t.decimal(`mirr`, 10, 2)
      t.decimal(`payback_years`, 10, 1)
      t.decimal(`total_co2_tons`, 10, 1)
      t.decimal(`saved_kwh`, 10, 1)
      t.decimal(`saved_kwh_percent`, 3, 0)
      t.decimal(`saved_co2_tons`, 10, 0)
      t.decimal(`saved_co2_percent`, 3, 1)
      t.decimal(`saved_mbtu`, 10, 0)
      t.decimal(`saved_mbtu_percent`, 5, 2)
      t.decimal(`yearly_energy_cost`, 10, 0)
      t.decimal(`annual_electric_kWh_used`, 10, 1)
      t.decimal(`annual_electric_dollars_spent`, 10, 0)
      t.decimal(`annual_fuel_therms_used`, 10, 0)
      t.decimal(`annual_fuel_dollars_spent`, 10, 0)
      t.decimal(`annual_fuel_therms_improved`, 10, 0)
      t.decimal(`annual_electric_kWh_improved`, 10, 1)
      t.decimal(`mbtu_base`, 10, 0)
      t.decimal(`mbtu_improved`, 10, 0)
      t.decimal(`annual_fuel_dollars_improved`, 10, 0)
      t.decimal(`annual_electric_dollars_improved`, 10, 0)
      t.decimal(`yearly_energy_cost_improved`, 10, 0)
      t.decimal(`total_co2_tons_base`, 10, 1)
      t.decimal(`annual_fuel_therms_saved`, 10, 0)
      t.bool(`touched`).notNullable().defaultTo(0)
      t.specificType(`updated_at`, 'TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP')
    })
    .createTableIfNotExists('v5_reports', (t) => {
      t.integer(`job_id`).unsigned().primary().notNullable().references('jobs.id').onDelete('cascade')
      t.uuid(`cover_photo_uuid`)
      t.string(`cover_photo_name`, 1024)
      t.string(`cover_photo_url`, 1024)
      t.string(`serviced_by_title`).defaultTo('Audited By')
      t.string(`service_date_title`).defaultTo('Audit Date')
      t.text(`cover_text_area`)
      t.string(`toggled_pages`)
      t.string(`toggled_elements`)
      t.text(`concerns_sidebar`)
      t.text(`solutions_title`)
      t.text(`approximate_cost_text`)
      t.text(`estimated_savings_text`)
      t.text(`safety_overview`)
      t.string(`additional_notes_overview_title`, 255).defaultTo('About this section')
      t.text(`additional_notes_overview`)
      t.string(`title_cover`, 50).notNullable().defaultTo('Your Energy Audit')
      t.string(`title_concerns`, 50).notNullable().defaultTo('Concerns')
      t.string(`title_solutions`, 50).notNullable().defaultTo('Solutions for Your Home')
      t.string(`title_financing`, 50).notNullable().defaultTo('Financing')
      t.string(`title_additional`, 50).notNullable().defaultTo('Additional Notes')
      t.string(`title_rebates`, 50).notNullable().defaultTo('Rebates & Incentives')
      t.string(`title_tech_specs`, 50).notNullable().defaultTo('Tech Specs')
      t.string(`title_metrics`, 50).notNullable().defaultTo('Metrics')
      t.string(`title_glossary`, 50).notNullable().defaultTo('Glossary')
      t.bool(`page_cover`).notNullable().default(1)
      t.bool(`page_financing`).notNullable().default(1)
      t.bool(`page_concerns`).notNullable().default(1)
      t.bool(`page_solutions`).notNullable().default(1)
      t.bool(`page_upgrade_details`).notNullable().default(1)
      t.bool(`page_health`).notNullable().default(1)
      t.bool(`page_additional_notes`).notNullable().default(1)
      t.bool(`page_rebates`).notNullable().default(1)
      t.bool(`page_tech_specs`).notNullable().default(1)
      t.bool(`page_metrics`).notNullable().default(1)
      t.bool(`page_glossary`).notNullable().default(1)
      t.tinyint(`element_costs`).notNullable().default(2)
      t.bool(`element_savings`).notNullable().default(1)
      t.bool(`element_sir`).notNullable().default(1)
      t.bool(`element_co2`).notNullable().default(1)
      t.bool(`element_photos`).notNullable().default(1)
      t.bool(`element_homeowner_notes`).notNullable().default(1)
      t.bool(`element_contractor_notes`).notNullable().default(1)
      t.bool(`element_now_and_goal`).notNullable().default(1)
      t.bool(`element_why_it_matters`).notNullable().default(1)
      t.bool(`element_program_info`).notNullable().defaultTo(1)
      t.varchar(`title_hes`, 50).notNullable().defaultTo('Home Energy Score')
      t.bool(`page_hes`).notNullable().defaultTo(1)
      t.tinyint(`theme`, 2).defaultTo(1)
      t.specificType(`updated_at`, 'TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP')
    })
    .raw('CREATE TABLE `v5_rec_definitions` LIKE `v4_rec_definitions`')
    .raw('INSERT `v5_rec_definitions` SELECT * FROM `v4_rec_definitions`;')
    .raw('CREATE TABLE `v5_stages` LIKE `v4_stages`')
    .raw('INSERT `v5_stages` SELECT * FROM `v4_stages`')
    .createTableIfNotExists('v5_job_stage_history', (t) => {
      t.integer('job_id').notNullable().unsigned().primary().references('jobs.id').onDelete('cascade')
      t.integer(`stage_id`).notNullable()
      t.integer(`changed_by`)
      t.datetime(`start_at`).notNullable()
      t.datetime(`end_at`)
    })
    .createTableIfNotExists('v5_utilities', (t) => {
      t.integer('job_id').notNullable().unsigned().primary().references('jobs.id').onDelete('cascade')
      t.enu('bill_entry_type', ["Detailed", "Simple", "No Bills"])
      t.string('electric_utility_provider_name')
      t.string('electric_account_number')
      t.string('highest_monthly_summer_electric_bill')
      t.string('lowest_monthly_electric_bill')
      t.enu('electric_bill_units', ["kWh", "Dollars"]).defaultTo('kWh')
      t.date('start_electric_date_1')
      t.date('end_electric_date_1')
      t.string('end_electric_bill_1')
      t.date('end_electric_date_2')
      t.string('end_electric_bill_2')
      t.date('end_electric_date_3')
      t.string('end_electric_bill_3')
      t.date('end_electric_date_4')
      t.string('end_electric_bill_4')
      t.date('end_electric_date_5')
      t.string('end_electric_bill_5')
      t.date('end_electric_date_6')
      t.string('end_electric_bill_6')
      t.date('end_electric_date_7')
      t.string('end_electric_bill_7')
      t.date('end_electric_date_8')
      t.string('end_electric_bill_8')
      t.date('end_electric_date_9')
      t.string('end_electric_bill_9')
      t.date('end_electric_date_10')
      t.string('end_electric_bill_10')
      t.date('end_electric_date_11')
      t.string('end_electric_bill_11')
      t.date('end_electric_date_12')
      t.string('end_electric_bill_12')
      t.date('start_fuel_date_1')
      t.date('end_fuel_date_1')
      t.string('end_fuel_bill_1')
      t.date('end_fuel_date_2')
      t.string('end_fuel_bill_2')
      t.date('end_fuel_date_3')
      t.string('end_fuel_bill_3')
      t.date('end_fuel_date_4')
      t.string('end_fuel_bill_4')
      t.date('end_fuel_date_5')
      t.string('end_fuel_bill_5')
      t.date('end_fuel_date_6')
      t.string('end_fuel_bill_6')
      t.date('end_fuel_date_7')
      t.string('end_fuel_bill_7')
      t.date('end_fuel_date_8')
      t.string('end_fuel_bill_8')
      t.date('end_fuel_date_9')
      t.string('end_fuel_bill_9')
      t.date('end_fuel_date_10')
      t.string('end_fuel_bill_10')
      t.date('end_fuel_date_11')
      t.string('end_fuel_bill_11')
      t.date('end_fuel_date_12')
      t.string('end_fuel_bill_12')
      t.enu('primary_heating_fuel_type', ["", "Natural Gas", "Electricity", "Fuel Oil", "Propane", "Wood", "Pellets", "Solar", "Don\\'t Know"])
      t.string('fuel_utility_provider_name')
      t.string('fuel_account_number')
      t.string('highest_monthly_winter_electric_bill')
      t.string('highest_monthly_winter_natural_gas_bill')
      t.string('lowest_monthly_natural_gas_bill')
      t.enu('simple_fuel_units', ["Gallons", "Dollars"]).defaultTo('Dollars')
      t.string('total_simple_fuel_used_in_last_12_months')
      t.enu('fuel_bill_units', ["Therms", "Gallons", "Dollars"]).defaultTo('Therms')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('v5_totals')
    .dropTableIfExists('v5_rec_definitions')
    .dropTableIfExists('v5_reports')
    .dropTableIfExists('v5_stages')
    .dropTableIfExists('v5_job_stage_history')
    .dropTableIfExists('v5_utilities')
};
