class Store < ApplicationRecord
    after_create_commit { broadcast_store }

    private 
    def broadcast_store
        uuid = SecureRandom.uuid
        ActionCable.server.broadcast('StoreChannel', {
                                        id: uuid, 
                                        body: self.body
                                     })
    end

end
