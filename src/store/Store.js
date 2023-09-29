import { configureStore } from "@reduxjs/toolkit";
import ByteReducer from "../store/Slices/ByteSlice";
import CitiesReducer from "./Slices/CitiesSlice";
import ExperienceReducer from "./Slices/ExperienceSlice";
import ChannelsReducer from "./Slices/ChannelSlice";
import ScrollerReducer from "./Slices/ScrollerSlice";
import FeaturesReducer from "./Slices/FeatureSlice";
import ArticlesReducer from "./Slices/ArticleSlice";
import RandomCardReducer from "./Slices/RandomCardSlice";
import ExperienceById from "./Slices/ExperienceId";
import ArticleId from "./Slices/ArticleId";
import CityBriefId from "./Slices/CityBriefId";
import ChannelId from "./Slices/ChannelId";
import DailyBrief from "./Slices/DailyBriefSlice";
import Weather from "./Slices/WeatherSlice";
export const store = configureStore({
  reducer: {
    Byte: ByteReducer,
    Cities: CitiesReducer,
    Experience: ExperienceReducer,
    Channels: ChannelsReducer,
    Scroller: ScrollerReducer,
    Features: FeaturesReducer,
    Articles: ArticlesReducer,
    RandomCard: RandomCardReducer,
    ExperienceId: ExperienceById,
    ArticleId: ArticleId,
    CityBriefId: CityBriefId,
    ChannelId: ChannelId,
    DailyBrief: DailyBrief,
    Weather: Weather,
  },
  devTools: true,
});
