# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_20_155109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "presets", force: :cascade do |t|
    t.string "description"
    t.string "category"
    t.integer "volume"
    t.string "osc_type"
    t.integer "osc_mod"
    t.string "filter_type"
    t.integer "filter_frequency"
    t.integer "filter_q"
    t.boolean "is_mono"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "amp_attack"
    t.string "amp_decay"
    t.string "amp_sustain"
    t.string "amp_release"
    t.string "filt_attack"
    t.string "filt_decay"
    t.string "filt_sustain"
    t.string "filt_release"
    t.string "synth_filter_rolloff"
    t.string "synth_filter_exponent"
    t.string "synth_filter_q"
    t.string "synth_filter_frequency"
    t.string "synth_filter_base_frequency"
    t.index ["user_id"], name: "index_presets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "presets", "users"
end
