// Generated by https://quicktype.io

export interface Reddit {
  kind: string;
  data: RedditData;
}

export interface RedditData {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: LinkFlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: null;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint: PostHint;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: Domain;
  allow_live_comments: boolean;
  selftext_html: null;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media;
  is_video: boolean;
}

export interface AllAwarding {
  giver_coin_reward: number | null;
  subreddit_id: null;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate: number | null;
  award_sub_type: AwardSubType;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  description: string;
  end_date: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedIcon[];
  icon_format: null | string;
  icon_height: number;
  penny_price: number | null;
  award_type: AwardType;
  static_icon_url: string;
}

export enum AwardSubType {
  Global = 'GLOBAL',
}

export enum AwardType {
  Global = 'global',
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export enum FlairType {
  Text = 'text',
}

export enum Domain {
  MYoutubeCOM = 'm.youtube.com',
  YoutuBe = 'youtu.be',
  YoutubeCOM = 'youtube.com',
}

export interface Gildings {
  gid_1?: number;
  gid_2?: number;
  gid_3?: number;
}

export enum LinkFlairTextColor {
  Dark = 'dark',
}

export interface Media {
  oembed: Oembed;
  type: Domain;
}

export interface Oembed {
  provider_url: string;
  title: string;
  html: string;
  thumbnail_width: number;
  height: number;
  width: number;
  version: string;
  author_name: string;
  provider_name: ProviderName;
  thumbnail_url: string;
  type: Type;
  thumbnail_height: number;
  author_url: string;
  description?: string;
  url?: string;
}

export enum ProviderName {
  YouTube = 'YouTube',
}

export enum Type {
  Video = 'video',
}

export interface MediaEmbed {
  content: string;
  width: number;
  scrolling: boolean;
  height: number;
  media_domain_url?: string;
}

export enum WhitelistStatus {
  AllAds = 'all_ads',
  NoAds = 'no_ads',
  SomeAds = 'some_ads',
  PromoAdultNsfw = 'promo_adult_nsfw',
}

export enum PostHint {
  RichVideo = 'rich:video',
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Variants;
  id: string;
}

export interface Variants {
  obfuscated?: Nsfw;
  nsfw?: Nsfw;
}

export interface Nsfw {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
}

export enum Subreddit {
  Videos = 'videos',
}

export enum SubredditID {
  T52Qh1E = 't5_2qh1e',
}

export enum SubredditNamePrefixed {
  RVideos = 'r/videos',
}

export enum SubredditType {
  Public = 'public',
}

export enum Kind {
  T3 = 't3',
}

// Generated by https://quicktype.io

export interface RedditTrendingSubreddits {
  subreddit_names: string[];
  comment_count: number;
  comment_url: string;
}
//

export interface RedditAboutSubreddit {
  kind: string;
  data: SubredditData;
}
// Generated by https://quicktype.io

export interface RedditPopularSubreddits {
  kind: string;
  data: RedditPopularSubredditsData;
}

export interface RedditPopularSubredditsData {
  modhash: string;
  dist: number;
  children: SubredditChild[];
  after: string;
  before: null;
}

export interface SubredditChild {
  kind: Kind;
  data: SubredditData;
}

export interface SubredditData {
  user_flair_background_color: null;
  submit_text_html: null | string;
  restrict_posting: boolean;
  user_is_banned: null;
  free_form_reports: boolean;
  wiki_enabled: boolean;
  user_is_muted: null;
  user_can_flair_in_sr: null;
  display_name: string;
  header_img: null | string;
  title: string;
  allow_galleries: boolean;
  icon_size: number[] | null;
  primary_color: string;
  active_user_count: null;
  icon_img: null | string;
  display_name_prefixed: string;
  accounts_active: null;
  public_traffic: boolean;
  subscribers: number;
  user_flair_richtext: any[];
  videostream_links_count?: number;
  name: string;
  quarantine: boolean;
  hide_ads: boolean;
  emojis_enabled: boolean;
  advertiser_category: AdvertiserCategory;
  public_description: string;
  comment_score_hide_mins: number;
  user_has_favorited: null;
  user_flair_template_id: null;
  community_icon: string;
  banner_background_image: string;
  original_content_tag_enabled: boolean;
  submit_text: string;
  description_html: string;
  spoilers_enabled: boolean;
  header_title: null | string;
  header_size: number[] | null;
  user_flair_position: FlairPosition;
  all_original_content: boolean;
  has_menu_widget: boolean;
  is_enrolled_in_new_modmail: null;
  key_color: string;
  can_assign_user_flair: boolean;
  created: number;
  wls: number;
  show_media_preview: boolean;
  submission_type: SubmissionType;
  user_is_subscriber: null;
  disable_contributor_requests: boolean;
  allow_videogifs: boolean;
  user_flair_type: UserFlairType;
  allow_polls: boolean;
  collapse_deleted_comments: boolean;
  emojis_custom_size: number[] | null;
  public_description_html: null | string;
  allow_videos: boolean;
  is_crosspostable_subreddit: boolean;
  suggested_comment_sort: null | string;
  can_assign_link_flair: boolean;
  accounts_active_is_fuzzed: boolean;
  submit_text_label: null | string;
  link_flair_position: FlairPosition;
  user_sr_flair_enabled: null;
  user_flair_enabled_in_sr: boolean;
  allow_chat_post_creation?: boolean;
  allow_discovery: boolean;
  user_sr_theme_enabled: boolean;
  link_flair_enabled: boolean;
  subreddit_type: SubredditType;
  notification_level: null;
  banner_img: null | string;
  user_flair_text: null;
  banner_background_color: string;
  show_media: boolean;
  id: string;
  user_is_contributor: null;
  over18: boolean;
  description: string;
  is_chat_post_feature_enabled?: boolean;
  submit_link_label: null | string;
  user_flair_text_color: null;
  restrict_commenting: boolean;
  user_flair_css_class: null;
  allow_images: boolean;
  lang: Lang;
  whitelist_status: WhitelistStatus;
  url: string;
  created_utc: number;
  banner_size: number[] | null;
  mobile_banner_image: string;
  user_is_moderator: null;
  content_category?: string;
}

export enum AdvertiserCategory {
  Empty = '',
  Entertainment = 'Entertainment',
  Games = 'Games',
  Lifestyles = 'Lifestyles',
}

export enum Lang {
  En = 'en',
  Es = 'es',
}

export enum FlairPosition {
  Empty = '',
  Left = 'left',
  Right = 'right',
}

export enum SubmissionType {
  Any = 'any',
  Link = 'link',
  Self = 'self',
}

export enum UserFlairType {
  Text = 'text',
}

export enum Kind {
  T5 = 't5',
}
