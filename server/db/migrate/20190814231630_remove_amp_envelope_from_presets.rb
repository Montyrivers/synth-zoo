class RemoveAmpEnvelopeFromPresets < ActiveRecord::Migration[5.2]
  def change
    remove_column :presets, :amp_envelope, :string
    remove_column :presets, :mono_poly, :string
  end
end
