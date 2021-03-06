class Party < ActiveRecord::Base
  has_many :politicians
  attr_accessible :name, :hex_colour, :website, :image, :image_file_name

  validates_presence_of :name

  has_attached_file :image, :styles => { :large => "500x500>", :medium => "300x300>", :small => "200x200>", :thumb => "100x100>" },
                    :url  => "/uploads/party_image/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/uploads/party_image/:id/:style/:basename.:extension"
end
