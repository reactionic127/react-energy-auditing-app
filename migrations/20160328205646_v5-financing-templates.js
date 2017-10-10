
exports.up = function(knex, Promise) {
  return knex.schema
    .createTableIfNotExists('v5_financing_templates', (t) => {
      t.increments('id')
      t.integer('account_id').unsigned().index().references('accounts.id').onDelete('SET NULL')
      t.integer('company_id').unsigned().index().references('companies.id').onDelete('SET NULL')
      t.integer('program_id').unsigned().index().references('programs.id').onDelete('SET NULL')
      t.varchar(`type`, 255)
      t.varchar(`title`, 255)
      t.decimal(`rate`, 5, 3)
      t.varchar(`closing_cost`, 255)
      t.varchar(`term`, 5)
      t.varchar(`min_fico_score`, 11)
      t.varchar(`min_cash_down`, 8)
      t.varchar(`min_purchase`, 8)
      t.varchar(`max_purchase`, 8)
      t.text(`eligibility`)
      t.text(`description`)
      t.text(`contact_info`)
      t.specificType('created_at', 'TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP')
      t.specificType('updated_at', 'TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP')
      t.specificType('deleted_at', 'TIMESTAMP NULL DEFAULT NULL')
    })
    .createTableIfNotExists('v5_job_financing', (t) => {
      t.uuid('uuid').primary()
      t.integer('job_id').unsigned().index().references('jobs.id').onDelete('cascade')
      t.varchar(`type`, 255)
      t.varchar(`title`, 255)
      t.decimal(`rate`, 5, 3)
      t.varchar(`closing_cost`, 255)
      t.varchar(`term`, 5)
      t.varchar(`min_fico_score`, 11)
      t.varchar(`min_cash_down`, 8)
      t.varchar(`min_purchase`, 8)
      t.varchar(`max_purchase`, 8)
      t.text(`eligibility`)
      t.text(`description`)
      t.text(`contact_info`)
      t.decimal(`total_cost`, 10, 2)
      t.decimal(`cash_down`, 10, 2)
      t.integer('order').notNullable()
      t.bool('is_shown').defaultTo(0)
      t.integer(`from_financing_template_id`).unsigned().references('v5_financing_templates.id').onDelete('SET NULL')
      t.specificType('created_at', 'TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP')
      t.specificType('updated_at', 'TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP')
      t.specificType('deleted_at', 'TIMESTAMP NULL DEFAULT NULL')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
      .dropTableIfExists('v5_job_financing')
      .dropTableIfExists('v5_financing_templates')
};
