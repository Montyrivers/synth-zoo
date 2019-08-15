class CreatePresets < ActiveRecord::Migration[5.2]
  def change
    create_table :presets do |t|
      t.string :description
      t.string :category
      t.integer :volume
      t.string :amp_envelope
      t.string :osc_type
      t.integer :osc_mod
      t.string :filter_type
      t.integer :filter_frequency
      t.integer :filter_q
      t.boolean :is_mono
      t.string :mono_poly
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
