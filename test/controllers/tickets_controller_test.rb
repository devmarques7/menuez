require "test_helper"

class TicketsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ticket = tickets(:one)
  end

  test "should get index" do
    get tickets_url, as: :json
    assert_response :success
  end

  test "should create ticket" do
    assert_difference("Ticket.count") do
      post tickets_url, params: { ticket: { available: @ticket.available, event_id: @ticket.event_id, expired_at: @ticket.expired_at, ticket_type: @ticket.ticket_type, user_id: @ticket.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show ticket" do
    get ticket_url(@ticket), as: :json
    assert_response :success
  end

  test "should update ticket" do
    patch ticket_url(@ticket), params: { ticket: { available: @ticket.available, event_id: @ticket.event_id, expired_at: @ticket.expired_at, ticket_type: @ticket.ticket_type, user_id: @ticket.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy ticket" do
    assert_difference("Ticket.count", -1) do
      delete ticket_url(@ticket), as: :json
    end

    assert_response :no_content
  end
end
