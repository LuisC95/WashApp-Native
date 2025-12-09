import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { washServices, ServiceStatusEnum } from './Service';
import { defUser } from '../user-components/User';

/**
 * Componente que muestra el estado actual del servicio más reciente del usuario
 * Reemplaza el botón "New Wash" en la pantalla principal
 * Permite ver en tiempo real dónde está el servicio en el proceso
 */
export default function CurrentServiceStatus() {
    /**
     * Obtiene el último servicio registrado del usuario
     */
    const getLatestService = () => {
        if (washServices.length === 0) return null;
        return washServices[washServices.length - 1];
    };

    /**
     * Obtiene el color correspondiente al estado del servicio
     */
    const getStatusColor = (status: ServiceStatusEnum): string => {
        switch (status) {
            case ServiceStatusEnum.TUNNEL_WASH:
                return '#3498db';      // Azul
            case ServiceStatusEnum.QUEUED:
                return '#f39c12';      // Naranja
            case ServiceStatusEnum.IN_PROGRESS:
                return '#e74c3c';      // Rojo
            case ServiceStatusEnum.COMPLETED:
                return '#52CC52';      // Verde
            default:
                return '#95a5a6';      // Gris
        }
    };

    /**
     * Obtiene el icono emoji correspondiente al estado
     */
    const getStatusEmoji = (status: ServiceStatusEnum): string => {
        switch (status) {
            case ServiceStatusEnum.TUNNEL_WASH:
                return '💧';
            case ServiceStatusEnum.QUEUED:
                return '⏳';
            case ServiceStatusEnum.IN_PROGRESS:
                return '🔧';
            case ServiceStatusEnum.COMPLETED:
                return '✅';
            default:
                return '❓';
        }
    };

    /**
     * Determina si un estado debe estar completo en la barra de progreso
     */
    const isStatusComplete = (status: ServiceStatusEnum, currentStatus: ServiceStatusEnum): boolean => {
        const statusOrder = [
            ServiceStatusEnum.TUNNEL_WASH,
            ServiceStatusEnum.QUEUED,
            ServiceStatusEnum.IN_PROGRESS,
            ServiceStatusEnum.COMPLETED
        ];
        const currentIndex = statusOrder.indexOf(currentStatus);
        const statusIndex = statusOrder.indexOf(status);
        return statusIndex <= currentIndex;
    };

    const latestService = getLatestService();

    // Si no hay servicios, mostrar un mensaje
    if (!latestService) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay servicios registrados</Text>
                <Text style={styles.emptySubtext}>
                    Registra un nuevo lavado para comenzar
                </Text>
            </View>
        );
    }

    const statusColor = getStatusColor(latestService.serviceStatus.currentStatus);
    const statusLabel = latestService.serviceStatus.getStatusLabel();
    const statusEmoji = getStatusEmoji(latestService.serviceStatus.currentStatus);
    const isCompleted = latestService.serviceStatus.currentStatus === ServiceStatusEnum.COMPLETED;

    return (
        <View style={styles.container}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Estado Actual del Servicio</Text>
                <Text style={styles.vehicleInfo}>
                    {defUser.carBrand} {defUser.carModel} ({defUser.carYear})
                </Text>
            </View>

            {/* Estado Principal */}
            <View style={[styles.statusCard, { borderLeftColor: statusColor }]}>
                {/* Número de servicio */}
                <View style={styles.serviceNumberContainer}>
                    <Text style={styles.label}>Servicio #</Text>
                    <Text style={styles.serviceNumber}>
                        {latestService.serviceNumber}
                    </Text>
                </View>

                {/* Estado animado */}
                <View style={[styles.statusDisplay, { backgroundColor: statusColor }]}>
                    <Text style={styles.statusEmoji}>{statusEmoji}</Text>
                    <View style={styles.statusTextContainer}>
                        <Text style={styles.statusLabel}>{statusLabel}</Text>
                        <Text style={styles.statusSubtext}>
                            {latestService.serviceType}
                        </Text>
                    </View>
                </View>

                {/* Información del servicio */}
                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>👤 Empleado:</Text>
                        <Text style={styles.infoValue}>
                            {latestService.serviceEmployee}
                        </Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>⏱️ Duración:</Text>
                        <Text style={styles.infoValue}>
                            {latestService.serviceTimming} minutos
                        </Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>⭐ Calificación:</Text>
                        <Text style={styles.infoValue}>
                            {latestService.serviceRating}/5
                        </Text>
                    </View>
                </View>

                {/* Recomendaciones */}
                <View style={styles.recommendationsSection}>
                    <Text style={styles.recommendationsTitle}>💡 Recomendaciones:</Text>
                    <Text style={styles.recommendationsText}>
                        {latestService.recomendations}
                    </Text>
                </View>

                {/* Feedback si está completado */}
                {isCompleted && (
                    <View style={styles.feedbackSection}>
                        <Text style={styles.feedbackTitle}>✨ Feedback:</Text>
                        <Text style={styles.feedbackText}>
                            {latestService.feedback}
                        </Text>
                    </View>
                )}
            </View>

            {/* Progreso visual del estado */}
            <View style={styles.progressContainer}>
                <Text style={styles.progressLabel}>Progreso del Servicio</Text>
                <View style={styles.progressBar}>
                    {[
                        ServiceStatusEnum.TUNNEL_WASH,
                        ServiceStatusEnum.QUEUED,
                        ServiceStatusEnum.IN_PROGRESS,
                        ServiceStatusEnum.COMPLETED
                    ].map((status, index) => (
                        <View
                            key={index}
                            style={[
                                styles.progressStep,
                                {
                                    backgroundColor: isStatusComplete(status, latestService.serviceStatus.currentStatus)
                                        ? getStatusColor(status)
                                        : '#e0e0e0'
                                }
                            ]}
                        />
                    ))}
                </View>
            </View>

            {/* Botón de acción contextual */}
            {isCompleted ? (
                <View style={styles.completedMessage}>
                    <Text style={styles.completedText}>
                        ¡Servicio completado! Gracias por usar nuestros servicios.
                    </Text>
                </View>
            ) : (
                <View style={styles.actionHint}>
                    <Text style={styles.hintText}>
                        El servicio está en progreso. Vuelve pronto para ver actualizaciones.
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 12,
    },

    emptyContainer: {
        paddingVertical: 40,
        alignItems: 'center',
    },

    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000E1F',
        marginBottom: 8,
    },

    emptySubtext: {
        fontSize: 14,
        color: '#888',
    },

    header: {
        marginBottom: 16,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000E1F',
        marginBottom: 4,
    },

    vehicleInfo: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
    },

    statusCard: {
        borderLeftWidth: 4,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    serviceNumberContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },

    label: {
        fontSize: 12,
        color: '#888',
        marginRight: 8,
    },

    serviceNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000E1F',
    },

    statusDisplay: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        gap: 12,
    },

    statusEmoji: {
        fontSize: 32,
    },

    statusTextContainer: {
        flex: 1,
    },

    statusLabel: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 2,
    },

    statusSubtext: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
    },

    infoSection: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    infoLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#555',
    },

    infoValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000E1F',
    },

    recommendationsSection: {
        backgroundColor: '#e8f4f8',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },

    recommendationsTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#0066cc',
        marginBottom: 6,
    },

    recommendationsText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 18,
    },

    feedbackSection: {
        backgroundColor: '#e8f8f0',
        borderRadius: 8,
        padding: 12,
    },

    feedbackTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#2ecc71',
        marginBottom: 6,
    },

    feedbackText: {
        fontSize: 12,
        color: '#333',
        lineHeight: 18,
    },

    progressContainer: {
        marginBottom: 16,
    },

    progressLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#000E1F',
        marginBottom: 8,
    },

    progressBar: {
        flexDirection: 'row',
        gap: 8,
    },

    progressStep: {
        flex: 1,
        height: 6,
        borderRadius: 3,
    },

    completedMessage: {
        backgroundColor: '#d4edda',
        borderRadius: 8,
        padding: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#52CC52',
    },

    completedText: {
        fontSize: 13,
        color: '#155724',
        fontWeight: '500',
    },

    actionHint: {
        backgroundColor: '#fff3cd',
        borderRadius: 8,
        padding: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#ffc107',
    },

    hintText: {
        fontSize: 13,
        color: '#856404',
        fontWeight: '500',
    },
});
