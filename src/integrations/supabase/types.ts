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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_date: string
          appointment_time: string
          created_at: string
          id: string
          lead_id: string | null
          status: string
          timezone: string
          updated_at: string
        }
        Insert: {
          appointment_date: string
          appointment_time: string
          created_at?: string
          id?: string
          lead_id?: string | null
          status?: string
          timezone?: string
          updated_at?: string
        }
        Update: {
          appointment_date?: string
          appointment_time?: string
          created_at?: string
          id?: string
          lead_id?: string | null
          status?: string
          timezone?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      available_slots: {
        Row: {
          created_at: string
          day_of_week: number
          duration_minutes: number
          id: string
          is_active: boolean
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          duration_minutes?: number
          id?: string
          is_active?: boolean
          start_time: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          duration_minutes?: number
          id?: string
          is_active?: boolean
          start_time?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          automation_goals: string | null
          budget_range: string | null
          company_name: string
          company_size: Database["public"]["Enums"]["company_size"] | null
          created_at: string
          current_processes: string | null
          email: string
          first_name: string
          id: string
          industry: string | null
          job_title: string | null
          last_name: string
          notes: string | null
          pain_points: string | null
          phone: string | null
          source: string | null
          status: Database["public"]["Enums"]["lead_status"]
          timeline: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          automation_goals?: string | null
          budget_range?: string | null
          company_name: string
          company_size?: Database["public"]["Enums"]["company_size"] | null
          created_at?: string
          current_processes?: string | null
          email: string
          first_name: string
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name: string
          notes?: string | null
          pain_points?: string | null
          phone?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          timeline?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          automation_goals?: string | null
          budget_range?: string | null
          company_name?: string
          company_size?: Database["public"]["Enums"]["company_size"] | null
          created_at?: string
          current_processes?: string | null
          email?: string
          first_name?: string
          id?: string
          industry?: string | null
          job_title?: string | null
          last_name?: string
          notes?: string | null
          pain_points?: string | null
          phone?: string | null
          source?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          timeline?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      submission_logs: {
        Row: {
          created_at: string | null
          form_type: string
          honeypot_triggered: boolean | null
          id: string
          ip_address: unknown | null
          is_suspicious: boolean | null
          record_id: string | null
          table_name: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          form_type: string
          honeypot_triggered?: boolean | null
          id?: string
          ip_address?: unknown | null
          is_suspicious?: boolean | null
          record_id?: string | null
          table_name: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          form_type?: string
          honeypot_triggered?: boolean | null
          id?: string
          ip_address?: unknown | null
          is_suspicious?: boolean | null
          record_id?: string | null
          table_name?: string
          user_agent?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_rate_limit: {
        Args: {
          p_form_type: string
          p_ip_address: unknown
          p_max_submissions?: number
          p_time_window?: unknown
        }
        Returns: boolean
      }
      cleanup_old_submission_logs: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      detect_honeypot: {
        Args: { honeypot_field: string }
        Returns: boolean
      }
      log_submission: {
        Args: {
          p_form_type: string
          p_honeypot_triggered?: boolean
          p_ip_address: unknown
          p_record_id: string
          p_table_name: string
          p_user_agent: string
        }
        Returns: undefined
      }
      validate_email: {
        Args: { email: string }
        Returns: boolean
      }
      validate_phone: {
        Args: { phone: string }
        Returns: boolean
      }
    }
    Enums: {
      company_size: "1-10" | "11-50" | "51-200" | "201-1000" | "1000+"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "proposal_sent"
        | "closed_won"
        | "closed_lost"
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
      company_size: ["1-10", "11-50", "51-200", "201-1000", "1000+"],
      lead_status: [
        "new",
        "contacted",
        "qualified",
        "proposal_sent",
        "closed_won",
        "closed_lost",
      ],
    },
  },
} as const
