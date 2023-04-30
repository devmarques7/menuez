class Owner < ApplicationRecord
    has_many :events, dependent: :destroy
end
