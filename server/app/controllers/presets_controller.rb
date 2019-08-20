class PresetsController < ApplicationController
before_action :set_preset, only: %i[show update destroy]
before_action :authorize_request, except: %i[index show]

  def index
    @user = User.find(params[:user_id])
    @presets = Preset.where(user_id: @user.id)
    render json: @presets, status: :ok

  end
  
  def show
    @user = User.find(params[:user_id])
    @preset = Preset.find(params[:id])
    render json: @preset, status: :ok
  end
 
  def new
    @user = User.find(params[:user_id])
    @preset = Preset.new
  end
  
  def create
    @user = User.find(params[:user_id])
    @preset = Preset.new(preset_params)
      if @preset.save
        render json: @preset, status: :created
      else 
        render json: {errors: @preset.errors}, status: :unprocessable_entity
      end
  end
  
  def edit
    @user = User.find(params[:user_id])
    @preset = Preset.find(params[:id])
  end
  
  def update

    @user = User.find(params[:user_id])
    @preset = Preset.find(params[:id])
      if @preset.update(preset_params)
        render json: @preset, status: :ok
      else
        render json: {errors: @preset.errors }, status: :unprocessable_entity
      end
  end
  
  def destroy
 
    @user = User.find(params[:user_id])
    @preset = Preset.find(params[:id])
      @preset.destroy
      head 204
  
      
  end
  
  private

  def set_preset
    @preset = Preset.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no preset matches ID'}, status: 404
  end

  def preset_params
    params.require(:preset).permit(:description, :category, :volume, :amp_attack, :amp_decay, :amp_sustain, :amp_release, :osc_type, :osc_mod, :filter_type, :filter_frequency, :filter_q, :is_mono, :mono_poly,  :filt_attack, :filt_decay, :filt_sustain, :filt_release, :synth_filter_exponent, :synth_filter_q, :synth_filter_rolloff, :synth_filter_frequency, :synth_filter_base_frequency, :user_id)
  end
end
