class Event < ApplicationRecord
  belongs_to :owner
  has_many :tickets
end
