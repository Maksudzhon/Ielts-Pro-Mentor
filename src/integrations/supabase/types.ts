export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      challenges: {
        Row: {
          active: boolean | null
          challenge_type: string
          created_at: string | null
          description: string
          id: string
          requirements: Json | null
          title: string
          xp_reward: number
        }
        Insert: {
          active?: boolean | null
          challenge_type: string
          created_at?: string | null
          description: string
          id?: string
          requirements?: Json | null
          title: string
          xp_reward: number
        }
        Update: {
          active?: boolean | null
          challenge_type?: string
          created_at?: string | null
          description?: string
          id?: string
          requirements?: Json | null
          title?: string
          xp_reward?: number
        }
        Relationships: []
      }
      essays: {
        Row: {
          coherence_cohesion: number | null
          content: string
          created_at: string | null
          feedback: Json | null
          grammar_accuracy: number | null
          id: string
          lexical_resource: number | null
          overall_score: number | null
          task_achievement: number | null
          task_type: string
          topic: string
          user_id: string
          vocabulary_used: number | null
          word_count: number | null
        }
        Insert: {
          coherence_cohesion?: number | null
          content: string
          created_at?: string | null
          feedback?: Json | null
          grammar_accuracy?: number | null
          id?: string
          lexical_resource?: number | null
          overall_score?: number | null
          task_achievement?: number | null
          task_type: string
          topic: string
          user_id: string
          vocabulary_used?: number | null
          word_count?: number | null
        }
        Update: {
          coherence_cohesion?: number | null
          content?: string
          created_at?: string | null
          feedback?: Json | null
          grammar_accuracy?: number | null
          id?: string
          lexical_resource?: number | null
          overall_score?: number | null
          task_achievement?: number | null
          task_type?: string
          topic?: string
          user_id?: string
          vocabulary_used?: number | null
          word_count?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          level: string | null
          overall_band_score: number | null
          speaking_band_score: number | null
          updated_at: string | null
          user_id: string
          writing_band_score: number | null
          xp: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          level?: string | null
          overall_band_score?: number | null
          speaking_band_score?: number | null
          updated_at?: string | null
          user_id: string
          writing_band_score?: number | null
          xp?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          level?: string | null
          overall_band_score?: number | null
          speaking_band_score?: number | null
          updated_at?: string | null
          user_id?: string
          writing_band_score?: number | null
          xp?: number | null
        }
        Relationships: []
      }
      speaking_sessions: {
        Row: {
          audio_url: string | null
          created_at: string | null
          duration_seconds: number | null
          feedback: Json | null
          fluency_coherence: number | null
          grammar_accuracy: number | null
          id: string
          lexical_resource: number | null
          overall_score: number | null
          part: string
          pronunciation: number | null
          topic: string
          transcript: string | null
          user_id: string
        }
        Insert: {
          audio_url?: string | null
          created_at?: string | null
          duration_seconds?: number | null
          feedback?: Json | null
          fluency_coherence?: number | null
          grammar_accuracy?: number | null
          id?: string
          lexical_resource?: number | null
          overall_score?: number | null
          part: string
          pronunciation?: number | null
          topic: string
          transcript?: string | null
          user_id: string
        }
        Update: {
          audio_url?: string | null
          created_at?: string | null
          duration_seconds?: number | null
          feedback?: Json | null
          fluency_coherence?: number | null
          grammar_accuracy?: number | null
          id?: string
          lexical_resource?: number | null
          overall_score?: number | null
          part?: string
          pronunciation?: number | null
          topic?: string
          transcript?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_challenges: {
        Row: {
          challenge_id: string
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          progress: number | null
          user_id: string
        }
        Insert: {
          challenge_id: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          progress?: number | null
          user_id: string
        }
        Update: {
          challenge_id?: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          progress?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_vocabulary: {
        Row: {
          created_at: string | null
          id: string
          last_used: string | null
          learned: boolean | null
          used_count: number | null
          user_id: string
          vocabulary_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_used?: string | null
          learned?: boolean | null
          used_count?: number | null
          user_id: string
          vocabulary_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_used?: string | null
          learned?: boolean | null
          used_count?: number | null
          user_id?: string
          vocabulary_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_vocabulary_vocabulary_id_fkey"
            columns: ["vocabulary_id"]
            isOneToOne: false
            referencedRelation: "vocabulary_challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      vocabulary_challenges: {
        Row: {
          category: string | null
          created_at: string | null
          definition: string
          difficulty: string | null
          example: string
          id: string
          synonyms: string[] | null
          word: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          definition: string
          difficulty?: string | null
          example: string
          id?: string
          synonyms?: string[] | null
          word: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          definition?: string
          difficulty?: string | null
          example?: string
          id?: string
          synonyms?: string[] | null
          word?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
