require "test_helper"

class EventsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @event = events(:one)
  end

  test "should get index" do
    get events_url, as: :json
    assert_response :success
  end

  test "should create event" do
    assert_difference("Event.count") do
      post events_url, params: { event: { close_at: @event.close_at, date: @event.date, description: @event.description, location: @event.location, name: @event.name, open_at: @event.open_at, owner_id: @event.owner_id } }, as: :json
    end

    assert_response :created
  end

  test "should show event" do
    get event_url(@event), as: :json
    assert_response :success
  end

  test "should update event" do
    patch event_url(@event), params: { event: { close_at: @event.close_at, date: @event.date, description: @event.description, location: @event.location, name: @event.name, open_at: @event.open_at, owner_id: @event.owner_id } }, as: :json
    assert_response :success
  end

  test "should destroy event" do
    assert_difference("Event.count", -1) do
      delete event_url(@event), as: :json
    end

    assert_response :no_content
  end
end
