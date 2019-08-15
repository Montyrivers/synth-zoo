class AddDetailsToPresets < ActiveRecord::Migration[5.2]
  def change
    add_column :presets, :amp_attack, :string
    add_column :presets, :amp_decay, :string
    add_column :presets, :amp_sustain, :string
    add_column :presets, :amp_release, :string
  end
end
