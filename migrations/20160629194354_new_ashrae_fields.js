
exports.up = function(knex, Promise) {
  return knex.schema.table('v5_basedata', (t) => {
    t.enu('ashrae_62_2', ["", "Yes", "No"])
    t.decimal('ashrae_kitchen_fan_cfm', 3, 0)
    t.decimal('ashrae_kitchen_fan_cfm_improved', 3, 0)
    t.enu('ashrae_kitchen_window', ["", "Yes", "No"])
    t.enu('ashrae_kitchen_window_improved', ["", "Yes", "No"])
    t.enu('ashrae_number_of_bathrooms', ["", "1", "2", "3", "4"])
    t.decimal('ashrae_bathroom_fan_1_cfm', 3, 0)
    t.decimal('ashrae_bathroom_fan_1_cfm_improved', 3, 0)
    t.enu('ashrae_bathroom_1_window', ["", "Yes", "No"])
    t.enu('ashrae_bathroom_1_window_improved', ["", "Yes", "No"])
    t.decimal('ashrae_bathroom_fan_2_cfm', 3, 0)
    t.decimal('ashrae_bathroom_fan_2_cfm_improved', 3, 0)
    t.enu('ashrae_bathroom_2_window', ["", "Yes", "No"])
    t.enu('ashrae_bathroom_2_window_improved', ["", "Yes", "No"])
    t.decimal('ashrae_bathroom_fan_3_cfm', 3, 0)
    t.decimal('ashrae_bathroom_fan_3_cfm_improved', 3, 0)
    t.enu('ashrae_bathroom_3_window', ["", "Yes", "No"])
    t.enu('ashrae_bathroom_3_window_improved', ["", "Yes", "No"])
    t.decimal('ashrae_bathroom_fan_4_cfm', 3, 0)
    t.decimal('ashrae_bathroom_fan_4_cfm_improved', 3, 0)
    t.enu('ashrae_bathroom_4_window', ["", "Yes", "No"])
    t.enu('ashrae_bathroom_4_window_improved', ["", "Yes", "No"])
    t.decimal('ashrae_required_additional_cfm', 3, 0)
    t.decimal('ashrae_required_additional_cfm_improved', 3, 0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('v5_basedata', (t) => {
    t.dropColumn('ashrae_62_2')
    t.dropColumn('ashrae_kitchen_fan_cfm')
    t.dropColumn('ashrae_kitchen_fan_cfm_improved')
    t.dropColumn('ashrae_kitchen_window')
    t.dropColumn('ashrae_kitchen_window_improved')
    t.dropColumn('ashrae_number_of_bathrooms')
    t.dropColumn('ashrae_bathroom_fan_1_cfm')
    t.dropColumn('ashrae_bathroom_fan_1_cfm_improved')
    t.dropColumn('ashrae_bathroom_1_window')
    t.dropColumn('ashrae_bathroom_1_window_improved')
    t.dropColumn('ashrae_bathroom_fan_2_cfm')
    t.dropColumn('ashrae_bathroom_fan_2_cfm_improved')
    t.dropColumn('ashrae_bathroom_2_window')
    t.dropColumn('ashrae_bathroom_2_window_improved')
    t.dropColumn('ashrae_bathroom_fan_3_cfm')
    t.dropColumn('ashrae_bathroom_fan_3_cfm_improved')
    t.dropColumn('ashrae_bathroom_3_window')
    t.dropColumn('ashrae_bathroom_3_window_improved')
    t.dropColumn('ashrae_bathroom_fan_4_cfm')
    t.dropColumn('ashrae_bathroom_fan_4_cfm_improved')
    t.dropColumn('ashrae_bathroom_4_window')
    t.dropColumn('ashrae_bathroom_4_window_improved')
    t.dropColumn('ashrae_required_additional_cfm')
    t.dropColumn('ashrae_required_additional_cfm_improved')
  })
};
